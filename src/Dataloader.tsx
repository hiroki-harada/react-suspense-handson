import { useState, useMemo } from 'react'

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData1(): Promise<string> {
    await sleep(1000);
    return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}

export const DataLoader: React.VFC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string | null>(null);

    const _ = useMemo(() => {
      if (loading) {
        console.log("loading is true");
      }
      return 1;
    }, [loading]);

    // ローディングフラグが立っていてdataがまだ無ければローディングを開始する
    if (loading && data === null) {
      sleep(500).then(() => setData("boom!"));
      throw fetchData1().then(setData);
    }

    // データがあればそれを表示
    return (
        <div>
          <div>Data is {data}</div>
          <button className="border p-1" onClick={() => setLoading(true)}>
            load
          </button>
        </div>
      );
};