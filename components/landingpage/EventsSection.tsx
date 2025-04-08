
import { ScrollArea } from "../ui/scroll-area";
import events from "@/app/constants/data/events"
import { Separator } from "../ui/separator";
import { formatEventDate } from "@/lib/utils";
import { Button } from "../ui/button";
import { Session } from "next-auth";


export const EventsSection = ({data, session} : {data?: EventType[]; session: Session | null}) => {
data = events
 return <section id='events' className='pt-16 md:pt-32'>
<div className='w-full max-h-screen flex flex-col'>    
    <ScrollArea className='mx-auto max-w-5xl px-6 h-86 w-full relative'>
        {/* event tab - see all upcoming events*/}
     <div className='bg-white shadow-xs border-b-1 sticky top-0 '>
        <h1>Events</h1>
        <button>All</button>
        <button>Members</button>
        <button>Visitors</button>
     </div>
     {data.map((event, i) =>  (
        <div key={i} className='flex flex-col w-full'>
            <div className='flex gap-5 py-4 px-2 hover:bg-gray-50 '>
                <div className='flex flex-col items-center'>
                    <h2 className='font-medium text-red-500'>{formatEventDate(event.date).month}</h2>
                    <h3 className='text-xl -mt-2'>{formatEventDate(event.date).day}</h3>
                </div>
                <div className='flex-1 flex flex-row'>
                    <div className='flex-1'>
                    <h2 className='text-md font-semibold'>{event.name}</h2>
                    <div className='flex flex-col text-sm text-gray-500'>
                    <span>{event.format}</span>
                    <span>{event.course}</span>
                    <div>
                        {/* the event prices */}

                    </div>
                    </div>
                    </div>
                    <div>
                        {/* icons for share, download */}
                        <Button className='text-xs cursor-pointer' disabled={!event.visitorsCanJoin && !session}>{event.visitorsCanJoin ? "Join Now" : "Members Only"}</Button>
                    </div>
                </div>
            </div>
            <Separator />
        </div>
     )) }
    </ScrollArea>   
<div>Calendar Tab</div>     
</div>  

 </section>
}


export default EventsSection;