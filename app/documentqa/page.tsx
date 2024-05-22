import React from 'react';

const DocumentQA: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Document-Based Question and Answering (DocumentQA)</h1>
      <p className="text-lg mb-4">
        Document-based question and answering (DocumentQA) is an advanced technique that enables users to ask questions about a specific document and get accurate answers. This is achieved through the use of embeddings, a vector database, and large language models (LLMs) like Llama 3.
      </p>

      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <p className="text-lg mb-4">
        The process begins by converting the document into embeddings, which are numerical representations of the text. These embeddings capture the semantic meaning of the text, allowing the system to understand and retrieve relevant information effectively.
      </p>
      <p className="text-lg mb-4">
        The embeddings are then stored in a vector database. When a user asks a question, the system converts the question into embeddings and searches the vector database for the most relevant information. Finally, the retrieved information is fed into a large language model like Llama 3, which generates a precise and contextually appropriate answer.
      </p>

      <h2 className="text-2xl font-bold mb-4">Applications in Business Analytics</h2>
      <p className="text-lg mb-4">
        In business analytics, DocumentQA can be used to quickly extract insights from extensive reports, financial documents, and other unstructured data sources. This enables businesses to make data-driven decisions, identify trends, and gain a competitive edge without the need for manual data processing.
      </p>

      <h2 className="text-2xl font-bold mb-4">Applications in EdTech</h2>
      <p className="text-lg mb-4">
        In the education sector, DocumentQA can transform the way students interact with textbooks and other learning materials. By allowing students to ask questions and receive instant answers, DocumentQA facilitates a more interactive and engaging learning experience. This technology can make high-quality education more accessible and personalized.
      </p>

      <h2 className="text-2xl font-bold mb-4">Using Open-Source Models</h2>
      <p className="text-lg mb-4">
        The use of open-source models such as Llama 3 ensures that advanced document-based question and answering capabilities are accessible to everyone, free of cost. These models are developed and continuously improved by a community of researchers, providing cutting-edge technology without the associated expenses.
      </p>

      <p className="text-lg mb-4">
        Our company is dedicated to leveraging DocumentQA and open-source models to create innovative solutions that benefit both businesses and educational institutions. By offering these tools at no cost, we aim to democratize access to advanced AI technologies and support the development of a more informed and educated society.
      </p>
    </div>
  );
};

export default DocumentQA;
