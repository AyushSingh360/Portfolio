import React from 'react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId: string;
  verificationUrl: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Geeks4Geeks Certified AI/ML Devloper",
    issuer: "Artificial Intelligence and Machine learning",
    date: "2025",
    description: "AI/ML Certified (GeeksforGeeks): Mastering intelligent systems for data-driven innovation.",
    image: "/1.jpg",
    credentialId: "Geeks4Geeks",
    verificationUrl: "https://media.geeksforgeeks.org/certificates/1745579346/922840243643b92c6097ca3eb77cc2da.pdf"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2025",
    description: "Validates skills in designing, building, and deploying applications on Google Cloud Platform.",
    image: "/7.jpeg",
    credentialId: "8151180",
    verificationUrl: "#"
  },
  {
    id: 3,
    title: "Elements Of AI",
    issuer: "MinnaLearn UNIVERSITY OF HELSINKI Finland",
    date: "2023",
    description: "Demonstrates expertise in AI Fundamentals.",
    image: "/2.png",
    credentialId: "10xtkec5cLt",
    verificationUrl: "https://certificates.mooc.fi/validate/1oxtkec5c4t"
  },
  {
    id: 4,
    title: "Hugging Face project",
    issuer: "Simplilearn",
    date: "2025",
    description: "Contributed on Hugging Face project during Initial Development",
    image: "/3.jpeg",
    credentialId: "8315648",
    verificationUrl: "#"
  },
  {
    id: 5,
    title: "Geeks4Geeks DSA Bootcamp",
    issuer: "Geeks4Geeks",
    date: "2025",
    description: "Demonstrates proficiency in Data Structure problems.",
    image: "/4.jpg",
    credentialId: "beb04069df16f39e7b466562172da2bb",
    verificationUrl: "https://media.geeksforgeeks.org/courses/certificates/beb04069df16f39e7b466562172da2bb.pdf"
  },
  {
    id: 6,
    title: "Figma Bootcamp",
    issuer: "Let's Upgrade",
    date: "2025",
    description: "Validates skills in containerization, Figma UI/UX, and best practices.",
    image: "/5.jpg",
    credentialId: "LUEFGMAR1251486",
    verificationUrl: "https://verify.letsupgrade.in/certificate/LUEFGMAR1251486"
  },
  {
    id: 7,
    title: "Generative AI",
    issuer: "Infosys",
    date: "2025",
    description: "Validates knowledge of generative AI and its uses.",
    image: "/6.jpg",
    credentialId: "",
    verificationUrl: "https://verify.onwingspan.com/"
  },
  {
    id: 8,
    title: "Machine Learning With Python",
    issuer: "FreeCodecamp",
    date: "2025",
    description: "Demonstrates understanding of infrastructure as code concepts and Python ML.",
    image: "/8.jpg",
    credentialId: "fcc99084536-fea4-4422-a1d8-3ac1bbe9590a",
    verificationUrl: "https://www.freecodecamp.org/certification/fcc99084536-fea4-4422-a1d8-3ac1bbe9590a/machine-learning-with-python-v7"
  },
  {
    id: 9,
    title: "React Developer Certification",
    issuer: "Infosys",
    date: "2025",
    description: "Validates expertise in React development, including hooks, state management, and patterns.",
    image: "/11.jpeg",
    credentialId: "",
    verificationUrl: "https://verify.onwingspan.com/"
  },
  {
    id: 10,
    title: "Frontend Development",
    issuer: "Let's Upgrade",
    date: "2023",
    description: "Demonstrates proficiency in Frontend Development and best practices.",
    image: "/12.jpeg",
    credentialId: "CERT-2A3D0742",
    verificationUrl: "https://oneroadmap.io/skills/frontend/certificate/CERT-2A3D0742"
  },
  {
    id: 11,
    title: "Prompt Engineering/ Vibe Coding",
    issuer: "Simplilearn",
    date: "2025",
    description: "Understanding of prompt engineering, Learned how Vibe coding works.",
    image: "/9.jpeg",
    credentialId: "8310624",
    verificationUrl: "#"
  },
  {
    id: 12,
    title: "Python Bootcamp",
    issuer: "Let's Upgrade",
    date: "2025",
    description: "Demonstrates proficiency in Python programming fundamentals and OOP.",
    image: "/10.jpg",
    credentialId: "LUEPYTMAR1253666",
    verificationUrl: "https://verify.letsupgrade.in/certificate/LUEPYTMAR1253666"
  }
];

const Certificates: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {certificates.map(cert => (
        <div key={cert.id} className="bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-105">
          <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">{cert.title}</h3>
          <p className="text-sm text-gray-600">{cert.issuer}</p>
          <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
          <p className="text-sm text-gray-700">{cert.description}</p>
          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-2 inline-block"
            >
              Verify Credential
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certificates;
