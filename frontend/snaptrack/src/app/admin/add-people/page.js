'use client'
import { useState } from "react";
import styles from "./add-people.module.css";


export default function AddPeople() {
  const [image, setImage] = useState(null);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");

    
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Employee</h2>

      <form className={styles.form}>
        <label className={styles.label}>Employee ID:</label>
        <input type="text" className={styles.input} name="employeeId" value={id} onChange={(e)=>setId(e.target.value)} required/>

        <label className={styles.label}>First Name:</label>
        <input type="text" className={styles.input} name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>

        <label className={styles.label}>Last Name:</label>
        <input type="text" className={styles.input} name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>

        <label className={styles.label}>Designation:</label>
        <input type="text" className={styles.input} name="designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required/>

        <label className={styles.label}>Upload Image:</label>
        <input type="file" className={styles.fileInput} onChange={(e)=>{setImage(e.target.files[0]);}} required/>

        {image && (
          <div className={styles.previewContainer}>
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className={styles.preview}
            />
            <button className={styles.removeBtn} onClick={()=>{setImage(null)}}>Remove Image</button>
          </div>
        )}

        <button type="submit" className={styles.submitBtn}>
          Add Employee
        </button>
      </form>
    </div>
  );
}
