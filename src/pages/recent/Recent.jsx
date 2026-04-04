import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import Sidebar from "../../components/Sidebar";
import styles from "../joblist/Joblist.module.css";

// IMPORT SAME JOB LIST (important)
import googleImg from "../../assets/google.png";
import amazonImg from "../../assets/amazon.png";
import adobeImg from "../../assets/adobe.png";
import microsoftImg from "../../assets/microsoft.png";
import oracleImg from "../../assets/oracle2.png";
import openaiImg from "../../assets/openai.png";
import netflixImg from "../../assets/netflix.png";
import ciscoImg from "../../assets/cisco2.png";
import appleImg from "../../assets/apple2.png";
import nvidiaImg from "../../assets/nvidia.png";
import coinbaseImg from "../../assets/coinbase.png";
import ibmImg from "../../assets/ibm2.png";
import uberImg from "../../assets/uber.png";
import accentureImg from "../../assets/acc2.png";
import metaImg from "../../assets/meta.png";


const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", experience: "2 years", skills: ["React", "JavaScript", "CSS"], salary: "$95,000", img: googleImg },
  { id: 2, title: "Backend Developer", company: "Amazon", experience: "3 years", skills: ["Node.js", "MySQL", "REST API"], salary: "$100,000", img: amazonImg },
  { id: 3, title: "UI/UX Designer", company: "Adobe", experience: "2 years", skills: ["Figma", "UI Design", "Prototyping"], salary: "$85,000", img: adobeImg },
  { id: 4, title: "Data Analyst", company: "Microsoft", experience: "1 year", skills: ["Python", "SQL", "Excel"], salary: "$80,000", img: microsoftImg },
  { id: 5, title: "Cloud Engineer", company: "Oracle", experience: "3 years", skills: ["AWS", "Terraform", "Linux"], salary: "$110,000", img: oracleImg },
  { id: 6, title: "ML Engineer", company: "OpenAI", experience: "3 years", skills: ["Python", "TensorFlow", "Deep Learning"], salary: "$120,000", img: openaiImg },
  { id: 7, title: "Full Stack Developer", company: "Meta", experience: "4 years", skills: ["React", "Node.js", "MongoDB"], salary: "$105,000", img: metaImg },
  { id: 8, title: "DevOps Engineer", company: "Netflix", experience: "4 years", skills: ["Docker", "Kubernetes", "AWS"], salary: "$115,000", img: netflixImg },
  { id: 9, title: "Cybersecurity Analyst", company: "Cisco", experience: "2 years", skills: ["Network Security", "Penetration Testing", "Python"], salary: "$102,000", img: ciscoImg },
  { id: 10, title: "Mobile App Developer", company: "Apple", experience: "2 years", skills: ["React Native", "JavaScript", "API"], salary: "$108,000", img: appleImg },
  { id: 11, title: "AI Researcher", company: "NVIDIA", experience: "3 years", skills: ["AI", "Deep Learning", "Python"], salary: "$125,000", img: nvidiaImg },
  { id: 12, title: "System Engineer", company: "IBM", experience: "2 years", skills: ["Linux", "Networking", "Shell"], salary: "$90,000", img: ibmImg },
  { id: 13, title: "Blockchain Developer", company: "Coinbase", experience: "3 years", skills: ["Blockchain", "Solidity", "Web3"], salary: "$112,000", img: coinbaseImg },
  { id: 14, title: "Product Manager", company: "Uber", experience: "5 years", skills: ["Agile", "Leadership", "Strategy"], salary: "$118,000", img: uberImg },
  { id: 15, title: "Software Tester (QA)", company: "Accenture", experience: "2 years", skills: ["Testing", "Selenium", "Automation"], salary: "$78,000", img: accentureImg }
];

const Recent = () => {
  const [recentJobs, setRecentJobs] = useState([]);

 useEffect(() => {
  const interval = setInterval(() => {
    if (window.SplayReady) {   // ✅ FIXED
      clearInterval(interval);

      const k = 10;
      const ptr = window.Splay._malloc(4 * k);

      window.Splay.ccall(
        "getTopJobs",
        null,
        ["number", "number"],
        [ptr, k]
      );

      let ids = [];

      for (let i = 0; i < k; i++) {
        let val = window.Splay.getValue(ptr + i * 4, "i32");
        if (val !== -1) ids.push(val);
      }

      window.Splay._free(ptr);

      const filtered = jobs.filter(j => ids.includes(j.id));
    const ordered = ids
  .map(id => jobs.find(j => j.id === id))
  .filter(Boolean);

      setRecentJobs(ordered);
    }
  }, 200);
}, []);

  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.mainContent}>
        <h2>Recently Clicked Jobs</h2>

        <div className={styles.jobContainer}>
          {recentJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;