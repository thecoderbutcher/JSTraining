import ClientPerDayChart from "./components/ClientPerDayChart"
import DayPaymentChart from "./components/DayPaymentChart"
import FilterDate from "./components/FilterDate"
import {GeneralChart} from "./components/GeneralChart"
import LoanPerDay from "./components/LoanPerDay"
import PaymentePerDay from "./components/PaymentePerDay"
import ProgressPayments from "./components/ProgressPayments"

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 mx-2">
      <FilterDate />
      <ProgressPayments />
      <GeneralChart  
        data={{
          ganancia: 500,
          prestado: 1200,
          capital: 800,
          interes: 300,
          interesMora: 100
      }}/> 
      <PaymentePerDay />
      <DayPaymentChart />
      <LoanPerDay />
      <ClientPerDayChart />
    </div>
  )
}

export default Dashboard