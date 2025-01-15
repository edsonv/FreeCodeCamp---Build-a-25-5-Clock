import { InputHTMLAttributes, useRef, useState } from 'react';
import styles from './EditableInput.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const EditableInput = ({ ...props }: Props): JSX.Element => {
  const [isEdit, setIsEdit] = useState(false);
  const editableInputRef = useRef<HTMLDivElement>(null);

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
      className={styles.editableInput}
      ref={editableInputRef}
    >
      {isEdit ? (
        <input {...props} id='null' type='number' className={styles.input} />
      ) : (
        <span className={styles.text}>{props.value}</span>
      )}
    </div>
  );
};
