import { Button, Table, TableBody, TableHead } from './styles';

const Main = () => {
  return (
    <div>
      <Button>
        <input type='text' />
        <button>Добавить</button>
        <button>Редактировать</button>
        <button>Удалить</button>
      </Button>
      <Table>
        <table>
          <TableHead>
            <tr>
              <td>Номер</td>
              <td>Тип</td>
              <td>Скороговорка</td>
            </tr>
          </TableHead>
          <TableBody>
            <tr>
              <td>1</td>
              <td>Взрослые</td>
              <td>Около кола колокола, около ворот коловорот</td>
            </tr>
          </TableBody>
        </table>
      </Table>
    </div>
  );
};

export default Main;
