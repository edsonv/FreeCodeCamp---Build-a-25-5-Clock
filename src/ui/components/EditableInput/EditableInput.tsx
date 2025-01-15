import { InputHTMLAttributes, useState } from 'react';
import styles from './EditableInput.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const EditableInput = ({ ...props }: Props): JSX.Element => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div
      id={props.id}
      onDoubleClick={toggleEdit}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          setIsEdit(!isEdit);
        }
      }}
    >
      {isEdit ? (
        <input {...props} id='null' type='number' className={styles.input} />
      ) : (
        <span>{props.value}</span>
      )}
    </div>
  );
};
