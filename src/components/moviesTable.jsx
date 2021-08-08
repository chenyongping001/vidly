import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, sortColumn, onSort } = this.props;
    const columns = [
      {
        path: "title",
        label: "Title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <Like liked={movie.liked} onLike={() => onLike(movie)} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <Table
        data={movies}
        onSort={onSort}
        columns={columns}
        sortColumn={sortColumn}
      />
    );
  }
}
export default MoviesTable;
