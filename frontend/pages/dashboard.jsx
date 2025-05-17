// import React, { useEffect, useState } from 'react';
// import { getAllData, getPrediction, getClusters, getRecommendations } from '../services/api';
// import LineChart from '../components/LineChart';
// import MapCluster from '../components/MapCluster';
// // import RecommendationBox from '../components/RecommendationBox';
// // import FeedbackButton from '../components/FeedbackButton';

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [clusters, setClusters] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);

//   useEffect(() => {
//     getAllData({ tahun: 2024 }).then(res => setData(res.data));
//     getClusters(2024).then(res => setClusters(res.data));
//     getRecommendations().then(res => setRecommendations(res.data));
//   }, []);

//   return (
//     <div className="p-4 space-y-6">
//       <LineChart data={data} />
//       <MapCluster data={clusters} />
//       {/* <RecommendationBox data={recommendations} />
//       <FeedbackButton /> */}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
// import { getAllData, getPrediction, getClusters, getRecommendations } from '../services/api';
import LineChart from '../components/LineChart';
import MapCluster from '../components/MapCluster';
// import RecommendationBox from '../components/RecommendationBox';
// import FeedbackButton from '../components/FeedbackButton';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // ✅ DATA DUMMY UNTUK TESTING
  const dummyData = [
    { tahun: 2020, nilai: 65 },
    { tahun: 2021, nilai: 68 },
    { tahun: 2022, nilai: 70 },
    { tahun: 2023, nilai: 73 },
    { tahun: 2024, nilai: 75 },
  ];

  const dummyClusters = [
    {
      lat: -7.25,
      lon: 112.75,
      kabupaten: 'Surabaya',
      clusterColor: '#10b981',
      nilai: 75,
    },
    {
      lat: -6.2,
      lon: 106.8,
      kabupaten: 'Jakarta',
      clusterColor: '#3b82f6',
      nilai: 80,
    },
  ];

  const dummyRecommendations = [
    { title: 'Improve education access', detail: 'Focus on rural areas.' },
    { title: 'Increase healthcare funding', detail: 'Especially for provinces with low IPM.' },
  ];

  useEffect(() => {
    // MENGGUNAKAN DUMMY
    setData(dummyData);
    setClusters(dummyClusters);
    setRecommendations(dummyRecommendations);
  }, []);

  return (
    <div className="p-4 space-y-6">
      <LineChart data={data} />
      <MapCluster data={clusters} />
      {/* <RecommendationBox data={recommendations} />
      <FeedbackButton /> */}
    </div>
  );
};

export default Dashboard;


