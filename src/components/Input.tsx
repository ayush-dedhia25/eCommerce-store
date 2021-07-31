import React from 'react';

interface propTypes {
   inpType: string;
   id: string;
   label: string;
   onValueChange: (e: any) => void;
   placeholder?: string;
   min?: string;
   max?: string;
}

const Input: React.FC<propTypes> = ({ inpType, id, label, onValueChange, placeholder, min, max }) => {
   return (
      <div className="form-group">
         <label htmlFor={id}>{label}</label>
         <input
            required
            type={inpType}
            id={id}
            onChange={e => onValueChange(e.target.value)}
            className="form-control"
            placeholder={placeholder}
         />
      </div>
   );
}

export default Input;