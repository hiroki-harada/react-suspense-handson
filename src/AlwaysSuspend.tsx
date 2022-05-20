
const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const AlwaysSuspend: React.VFC = () => {
    console.log("AlwaysSuspend is rendered");
    throw sleep(1000);
};


export default AlwaysSuspend;