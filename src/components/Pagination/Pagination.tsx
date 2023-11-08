import "./Pagination.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface Props {
    page: number,
    changePage: (value:number) => void
  }


const Pagination = (props: Props) => {
    const {page, changePage} = props;
  return (
    <div className="pagination">
      {page > 1 ? <div  onClick={() => changePage(-1)}><AiOutlineArrowLeft /></div> : ""}
      <div className="pagination__selected">{page}</div>
      <div onClick={() => changePage(+1)}>{page + 1}</div>
      <div onClick={() => changePage(+2)}>{page + 2}</div>
      <div className="arrow_change" onClick={() => changePage(+1)}><AiOutlineArrowRight /></div>
    </div>
  );
};

export default Pagination;
