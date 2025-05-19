type SortingInfoProps = {
    title: string;
    description: string;
    timeComplexity: {
      best: string;
      average: string;
      worst: string;
    };
    spaceComplexity: string;
}
  
const SortingInfo = ({ title, description, timeComplexity, spaceComplexity }: SortingInfoProps) => (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <div className="flex flex-col gap-4">
        <div className="p-4 bg-indigo-100 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-600">Время работы</h3>
          <ul className="list-disc pl-6">
            <li><strong>Лучший случай:</strong> {timeComplexity.best}</li>
            <li><strong>Средний случай:</strong> {timeComplexity.average}</li>
            <li><strong>Худший случай:</strong> {timeComplexity.worst}</li>
          </ul>
        </div>
        <div className="p-4 bg-indigo-100 rounded-lg">
          <h3 className="text-xl font-semibold text-indigo-600">Сложность по памяти</h3>
          <p>{spaceComplexity}</p>
        </div>
      </div>
    </div>
  );
  
  export default SortingInfo;
  