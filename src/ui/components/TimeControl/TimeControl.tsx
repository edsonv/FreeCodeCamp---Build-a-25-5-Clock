import { ChangeEventHandler, MouseEventHandler } from 'react';
import { EditableInput } from '../EditableInput/EditableInput';
import { MinusIcon } from '../Icons/minusIcon';
import { PlusIcon } from '../Icons/plusIcon';
import styles from './TimeControl.module.scss';

type Props = {
  label: string;
  onClickIncrement: MouseEventHandler<HTMLButtonElement>;
  onClickDecrement: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const TimeControl = ({
  label,
  onClickIncrement,
  onClickDecrement,
  disabled = false,
  value,
  onChange,
}: Props) => {
  const formattedLabelForId = label.split(' ')[0].toLowerCase();

  return (
    <div className={styles.timeControl}>
      <div id={`${formattedLabelForId}-label`} className={styles.label}>{label}</div>
      <div className={styles.controls}>
        <button
          id={`${formattedLabelForId}-increment`}
          type='button'
          onClick={onClickIncrement}
          disabled={disabled}
        >
          <PlusIcon />
        </button>
        <EditableInput
          id={`${formattedLabelForId}-length`}
          value={value}
          onChange={onChange}
        />
        <button
          id={`${formattedLabelForId}-decrement`}
          type='button'
          onClick={onClickDecrement}
          disabled={disabled}
        >
          <MinusIcon />
        </button>
      </div>
    </div>
  );
};
