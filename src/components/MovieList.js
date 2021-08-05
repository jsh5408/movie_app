import React, {useState} from "react";
import Movie from "./Movie";
import Pagination from "./Paging/Paging";
import { paginate } from "./Paging/paginate";
import "./MovieList.css";

const MovieList = ({results}) => {
    const [movies, setMovies] = useState({
        data: results,
        pageSize: 5,
        currentPage: 1
    });

    const handlePageChange = (page) => {
        setMovies({ ...movies, currentPage: page });
    }

    const { data, pageSize, currentPage } = movies;
    const pagedMovies = paginate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴

    const { length: count } = movies.data;
    if (count === 0) 
        return <p>영화 정보가 없습니다.</p>;

    return (
        <section className="movielist">
            <div className="movies">
                {pagedMovies.map(movie => (
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.release_date}
                    title={movie.title}
                    summary={movie.overview}
                    poster={movie.poster_path}
                    />
                ))}
            </div>
            <Pagination
                pageSize = {pageSize}
                itemsCount={count}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </section>
    );
}


export default MovieList;
