
const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const SometimesSuspend: React.VFC = () => {
    if (Math.random() < 0.5) {
        console.log("SometimesSuspend is rendered");
        throw sleep(1000);
    }
    return <p>Hello, world!</p>;
};