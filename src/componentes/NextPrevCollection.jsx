import React from "react";
import { Link } from "react-router-dom";

export const NextPrevCollection = ({
  filteredCollections,
  indexOfCollection,
}) => {
  const lastIndexOfCollection = indexOfCollection + 1;

  if (indexOfCollection == 0) {
    const nextCollection = filteredCollections[1].Id;
    const nextCollectioTitle = filteredCollections[1].Title;
    return (
      <div className="collection-navigation">
        <div className="prev-navigation"></div>
        <div className="next-navigation">
          <Link
            to={`/collections/${nextCollection}`}
            reloadDocument
            className="button btn-home"
          >
            {nextCollectioTitle}
          </Link>
        </div>
      </div>
    );
  } else if (lastIndexOfCollection == filteredCollections.length) {
    const prevCollectionIndex = indexOfCollection - 1;
    const prevCollection = filteredCollections[prevCollectionIndex].Id;
    const prevCollectioTitle = filteredCollections[prevCollectionIndex].Title;
    return (
      <div className="collection-navigation">
        <div className="prev-navigation">
          <Link
            to={`/collections/${prevCollection}`}
            reloadDocument
            className="button btn-home"
          >
            {prevCollectioTitle}
          </Link>
        </div>
        <div className="next-navigation"></div>
      </div>
    );
  } else {
    const prevCollectionIndex = indexOfCollection - 1;
    const nextCollectionIndex = indexOfCollection + 1;
    const prevCollection = filteredCollections[prevCollectionIndex].Id;
    const nextCollection = filteredCollections[nextCollectionIndex].Id;
    const prevCollectioTitle = filteredCollections[prevCollectionIndex].Title;
    const nextCollectioTitle = filteredCollections[nextCollectionIndex].Title;

    return (
      <div className="collection-navigation">
        <div className="prev-navigation">
          <Link
            to={`/collections/${prevCollection}`}
            reloadDocument
            className="button btn-home"
          >
            {prevCollectioTitle}
          </Link>
        </div>
        <div className="next-navigation">
          <Link
            to={`/collections/${nextCollection}`}
            reloadDocument
            className="button btn-home"
          >
            {nextCollectioTitle}
          </Link>
        </div>
      </div>
    );
  }
};
