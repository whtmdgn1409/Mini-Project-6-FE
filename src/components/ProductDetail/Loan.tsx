export interface Iprop {
  loanName: string;
  gracePeriod: string;
  loanLimit: string;
  overdueRat: string;
  rate: string;
  repayMethod: string;
  repayPeriod: string;
  usge: string;
  wholePeriod: string;
}

const loans = [
  'loanName',
  'gracePeriod',
  'loanLimit',
  'overdueRat',
  'rate',
  'repayMethod',
  'repayPeriod',
  'usge',
  'wholePeriod',
];

const Loan = (props: Iprop) => {
  return (
    <ul className='px-[20px]'>
      {loans.map((loan, i) => (
        <li className='flex w-full flex-row items-center my-3' key={i}>
          <span className='basis-1/3 font-bold text-[18px]'>{loan}</span>
          <span className='basis-2/3 text-right'>{loan}</span>
        </li>
      ))}
    </ul>
  );
};

export default Loan;
