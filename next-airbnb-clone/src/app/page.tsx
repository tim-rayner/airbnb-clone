'use client';

const onDateChange = (range: {
  startDate: Date;
  endDate: Date;
  key: string;
}) => {
  console.log(range);
};

export default function Home() {
  return <main className="flex flex-col w-fit "></main>;
}
