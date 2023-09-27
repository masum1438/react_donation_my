const mySet = new Set();

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem('job-applications');
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
}

export function getData() {
  const sz = mySet.size; // Get the size from mySet directly
  return sz;
}

const saveJobApplication = (id) => {
  mySet.add(id);
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
  }
}

export { getStoredJobApplication, saveJobApplication };
