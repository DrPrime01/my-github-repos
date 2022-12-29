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
  const reposPerPage = 5;
  const [repoList, setRepoList] = useState([]);
  const [loadings, setLoadings] = useState(false);

  useEffect(() => {
    setLoadings(true);
    fetch(repo)
      .then(
        (res) => res.json(),
        (error) => handleError(error)
      )
      .then((data) => {
        setRepoList(data);
        setLoadings(false);
      });
  }, [currentPage]);

  //other factors
  const indexOfLastRepo = reposPerPage * currentPage
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repoList.slice(indexOfFirstRepo, indexOfLastRepo)

  const repos = currentRepos.map((repo) => {
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

  //changepage function
  const changePage = (pageNumber) => setCurrentPage(pageNumber);
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
            totalPages={repoList.length}
            reposPerPage={reposPerPage}
            changePage={changePage}          />
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
