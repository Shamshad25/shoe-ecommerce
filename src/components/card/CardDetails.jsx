import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DELETE, REMOVE } from "../../redux/action/action";

const CardDetails = () => {
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();

  const getData = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const compare = () => {
    let comparedData = getData.filter((e) => {
      return e.id == id;
    });
    setFilterData(comparedData);
  };

  // Add data

  const send = (e) => {
    dispatch(ADD(e));
  };

  // Decrement Item
  const decrement = (item) => {
    dispatch(REMOVE(item));
  };

  const remove = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Detail Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {filterData &&
              filterData.map((data) => {
                return (
                  <>
                    <div key={data.id} className="items_img">
                      <img src={data.imageURL} alt={data.name} />
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p>
                              <strong>Name :</strong>
                              {data.name}
                            </p>
                            <p>
                              <strong>Brand :</strong>
                              {data.brand}
                            </p>
                            <p>
                              <strong>Price : </strong> ${data.price}
                            </p>
                            <p>
                              <strong>Total : </strong> $
                              {data.price * data.qnty}
                            </p>
                            <div
                              className="mt-5 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                backgroundColor: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  data.qnty <= 1
                                    ? () => remove(data)
                                    : () => decrement(data)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>{data.qnty}</span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => send(data)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td>
                            <p>
                              <strong>Rating : </strong>
                              <span
                                style={{
                                  backgroundColor: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                3.5 ⭐
                              </span>
                            </p>
                            <p>
                              <strong>Items Left : </strong>
                              {data.items_left}
                            </p>
                            <p>
                              <strong>Category : </strong>
                              {data.category}
                            </p>
                            <p>
                              <strong>Remove : </strong>
                              <span>
                                <i
                                  className="fas fa-trash"
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => remove(data.id)}
                                ></i>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
