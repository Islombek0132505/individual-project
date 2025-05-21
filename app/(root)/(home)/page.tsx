import SelectionSortVisualizerHome from "./sort-components/selection.sort.home";
import SortPerformanceChart from "./info/sort.performance.chart";

export default function Page() {
    return (
      <>
        <div className="mx-auto max-w-6xl pb-24 container flex flex-col gap-8">
          <h1 className="text-center text-3xl font-medium" >Реализация интерпретатора cортировка данных методом выбора</h1>
          <SortPerformanceChart/>
          <SelectionSortVisualizerHome/>          
        </div>
      </>
    )
  }
  