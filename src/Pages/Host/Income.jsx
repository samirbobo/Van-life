import Chart from "../../components/Chartjsx";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "1/12/2002", id: "1" },
    { amount: 560, date: "17/4/2002", id: "2" },
    { amount: 980, date: "26/2/2002", id: "3" },
  ];

  return (
    <section className="income">
      <h2 className="income-h2">Income</h2>
      <p>
        income last <span>30 days</span>
      </p>
      <h2 className="price">$2,260</h2>

      <div className="list">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <Chart />
      {transactionsData.map((item) => (
        <div key={item.id} className="box-van">
          <h4>${item.amount}</h4>
          <span>{item.date}</span>
        </div>
      ))}
    </section>
  );
}
