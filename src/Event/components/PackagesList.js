import React from "react";
import EmptyPackagesList from "./EmptyPackagesList";

const PackagesList = (props) => {
  return (
    <>
      {props.packages.length === 0 ? (
        <EmptyPackagesList eventId={props.eventId} />
      ) : (
        <h2>packages</h2>
      )}
    </>
  );
};

export default PackagesList;
