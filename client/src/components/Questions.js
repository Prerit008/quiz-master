import { useDispatch, useSelector } from 'react-redux'


/** Custom Hook */
import { useFetchQestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

export default function Questions({ onChecked }) {
    const { trace } = useSelector((state) => state.questions);
    const result = useSelector((state) => state.result.result);
    const [{ isLoading, apiData, serverError }] = useFetchQestion();

    const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
    const dispatch = useDispatch();

    function onSelect(i) {
        onChecked(i); // Notify parent component of the selected option
        dispatch(updateResult({ trace, checked: i })); // Update Redux store with selected option
    }

    if (isLoading) return <h3 className="text-light">Loading...</h3>;
    if (serverError) return <h3 className="text-light">{String(serverError) || "Unknown Error"}</h3>;

    return (
        <div className=''>
<h2 className="text-gray-700 space-y-4 mb-6 flex ">
        {questions?.question}
      </h2>
      <ol key={questions?.id}>
  {
    questions?.options.map((q, i) => (
        <li key={i} className="flex items-center space-x-2 py-3 ">
        <input 
          type="radio"
          value={false}
          name="options"
          id={`q${i}-option`}
          onChange={() => onSelect(i)}
          className="w-5 h-5 text-indigo-600 border border-gray-300 focus:ring-indigo-500"
        />
        <label 
          className="p-0 text-base text-gray-700 h-[1.3rem]" 
          htmlFor={`q${i}-option`}
        >
          {q}
        </label>
      </li>
      
    ))
  }
</ol>

    </div>
    );
}
