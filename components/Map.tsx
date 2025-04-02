const Map = async () => {
  const src = await 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5879744318363!2d55.65039923202981!3d24.183198498770803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8aaf7ba12f62b1%3A0x86f9efb152e69415!2sAESGC%20Golf%20Course!5e0!3m2!1sen!2sae!4v1743601857257!5m2!1sen!2sae'
  return <iframe src={src} width="100%" height="300" referrerPolicy="no-referrer-when-downgrade"></iframe>
};

export default Map;
