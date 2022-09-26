import { useEffect, useState } from "react";

export default function Card(props) {
  useEffect(() => {
    // console.log("props", props.DataResponse);
  }, []);
  return (
    <>
      {/* <label>Trending</label> */}
      <div
        style={{ border: "1px solid #d2d2d2", padding: "3rem", margin: "3rem" }}
      >
        {props.DataResponse && props.DataResponse.length !== 0 ? (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
              }}
            >
              {props.DataResponse.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      width: "200px",
                      height: "100px",
                      border: "1px solid #d2d2d2",
                      margin: "0.4rem",
                    }}
                  >
                    <img
                      src={item.images.original.url}
                      type="img"
                      alt=""
                      width="50"
                      height="50"
                    />
                    <p>username : {item.username}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div>
              <label>No Gifs found</label>
            </div>
          </>
        )}
      </div>
    </>
  );
}

/*
 

*/
