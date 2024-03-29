import Task from "../Task/Task";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";

function Column({ tasks, title }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks.map((task) => (
          <Task id={task._id} key={task._id} task={task} />
        ))}
      </Cards>
    </MainColumn>
  );
}
export default Column;
