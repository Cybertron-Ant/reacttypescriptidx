import React from 'react';

const PageContainer: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{title} Page</h1>
    <p className="text-lg text-gray-600">Welcome to the {title.toLowerCase()} page of our modern React app!</p>
  </div>
);

export const Home = () => <PageContainer title="Home" />;
export const About = () => <PageContainer title="About" />;
export const Contact = () => <PageContainer title="Contact" />;
