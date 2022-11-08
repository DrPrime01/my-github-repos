import React from "react";
import Pagination from "../OtherComponents/Pagination";
import { useState, useEffect } from "react";
import Profile from "../OtherComponents/Profile";
import Repo from "../OtherComponents/Repo";
import Loading from "../OtherComponents/Loading";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

function Repositories() {
  const repo = `https://api.github.com/users/DrPrime01/repos`;
  const handleError = useErrorHandler();

  const [currentPage, setCurrentPage] = useState(1);
  const numberOfResults = 5;
  const [repoList, setRepoList] = useState([]);
  const [loadings, setLoadings] = useState(false);
  const minNumberOfPages = 1;
  const [maxNumberOfPages, setMaxNumberOfPages] = useState(0);

  const repoURL = `https://api.github.com/users/DrPrime01/repos?page=${currentPage}&per_page=${numberOfResults}`;

  useEffect(() => {
    setLoadings(true);
    fetch(repoURL)
      .then(
        (res) => res.json(),
        (error) => handleError(error)
      )
      .then((data) => {
        setRepoList(data);
        setLoadings(false);
      });
      fetch(repo)
        .then(res => res.json())
        .then(data => {
          const datalength = data.length;
          setMaxNumberOfPages(() => datalength / numberOfResults);
          console.log(maxNumberOfPages)
        })
  }, [currentPage, maxNumberOfPages]);

  const repos = repoList.map((repo) => {
    return (
      <Repo
        name={repo.name}
        link={repo.html_url}
        language={repo.language}
        created_at={repo.created_at}
        stars={repo.stargazers_count}
        id={repo.id}
        key={repo.id}
        data={repo}
      />
    );
  });
  return (
    <div className="flex flex-row justify-between xs:flex-col p-12 xs:p-6 xs:items-center">
      <div id="profile" className="w-1/4 xs:w-auto xs:mb-8">
        {loadings ? <Loading type="spin" color="gray" /> : <Profile />}
      </div>
      <div
        id="repo-pagination"
        className="flex flex-col w-3/5 xs:w-auto xs:items-center"
      >
        <div id="repo" className="mb-5">
          {loadings ? <Loading type="spin" color="gray" /> : repos}
        </div>
        <div id="pagination" className="px-4">
          <Pagination
            minNumberOfPages={minNumberOfPages}
            maxNumberOfPages={maxNumberOfPages}
            change={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

function RepositoriesWithErrorBoundary() {
  return (
    <ErrorBoundary FallbackComponent={<div>Error</div>}>
      <Repositories />
    </ErrorBoundary>
  );
}

export default RepositoriesWithErrorBoundary;
