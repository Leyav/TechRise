import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SubCategoryPage = () => {
  const { subcategory } = useParams();
  const [qaData, setQaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  useEffect(() => {
    if (!subcategory) return;

    // Simulate API call with timeout
    setLoading(true);
    setTimeout(() => {
      const dummyData = [
        {
          question: `What is ${subcategory}?`,
          answer: `${subcategory} is a popular technology used in modern development.`,
        },
        {
          question: `How does ${subcategory} work?`,
          answer: `It works by applying specific principles and patterns depending on the use case.`,
        },
        {
          question: `Why should you learn ${subcategory}?`,
          answer: `Learning ${subcategory} enhances your skillset and helps build efficient applications.`,
        },
      ];
      setQaData(dummyData);
      setLoading(false);
    }, 1000);
  }, [subcategory]);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container pt-24 px-6 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl font-bold text-purple-700 mb-6">
        📘 {subcategory} - Interview Questions
      </h1>

      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <div className="space-y-4">
          {qaData.map((qa, index) => (
            <div
              key={index}
              className="border rounded-md p-4 bg-white shadow hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left font-medium text-purple-700 text-lg hover:underline"
              >
                {qa.question}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-800 text-sm bg-gray-50 p-3 rounded">
                  {qa.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubCategoryPage;
