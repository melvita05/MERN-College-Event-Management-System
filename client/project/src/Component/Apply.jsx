import React,{useState,useEffect} from 'react'
import "../Css/Apply.css"
import axios from 'axios';



export default function Apply() {
const host ="http://127.0.0.1:8005"
const [user,SetUser]=useState({});
  const[Cat,setCat] = useState([]);
  const [formData,SetFormData]=useState({
    date:'',
    city:'',
    address:''
  })
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errors, setErrors] = useState({}); // Validation errors


  useEffect(() => {
    axios.get(`${host}/use/getcat`)
      .then((res) => {
        console.log(res.data);
        setCat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem('UserToken'))
    axios.get(`${host}/users/get`,{headers:{"auth-token":token}})
    .then((res)=>{
        console.log(res.data,"get data");
        SetUser(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
},[]);

const handleChange =(e) =>{
  SetFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!user?.name?.trim()) newErrors.name = "Name is required.";
    if (!user?.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email))
      newErrors.email = "Valid email is required.";
    if (!user?.phone?.trim() || !/^\d{10}$/.test(user.phone))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.gender) newErrors.gender = "Select Gender Here";
    if (!selectedCategory) newErrors.category = "Category is required.";
    if (!formData.date.trim()) newErrors.date = "Date is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
   // console.log('Checkout Form Data:', formData);
   if (!validate()) return; // Prevent submission if validation fails
   let data={...formData,...user};
   let token = JSON.parse(localStorage.getItem('UserToken'))
  try{
    await axios.post(`${host}/use2/insert`,data,{headers:{"auth-token":token}})
    alert("Applied successfully");
  }catch(error){
    console.log(error);
    alert("error submitting register")
  }
  };

  return (
    <div>
<section class="h-100 h-custom" style={{backgroundColor: "#8fc4b7"}}>
  <div class="container py-5 h-200">
    <div class="row d-flex justify-content-center align-items-center h-300">
      <div class="col-lg-8 col-xl-17">
        <div class="card rounded-3">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
            class="w-500" style={{borderTopLeftRadius:" .3rem", borderTopRightRadius: ".3rem"}}
            alt="Sample photo"/>
          <div class="card-body p-4 p-md-5">
            <h1 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h1>

            <form class="px-md-2">
            <div style={{display:"flex",justifyContent:"unset",flexDirection:"row",gap:"10px"}}>
            <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" htmlFor="form3Example1q" style={{ color: "black" }}>Name</label>
  <input

    type="text"
    id="form3Example1q"
    class="form-control"
    value={user?.name || ''}
    style={{ backgroundColor: "white", border: "1px solid black" ,padding:"13px"}}
    onChange={handleChange}
  />
   {errors.name && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.name}
                          </div>
                        )}
</div>

<div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" htmlFor="form3Example1w" style={{ color: "black" }}>Email</label>
  <input
    type="email"
    id="form3Example1w"
    class="form-control"
    name="email"
    value={user?.email || ''}
    style={{ backgroundColor: "white", border: "1px solid black" ,padding:"13px"}}
    onChange={handleChange}
  />
    {errors.email && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.email}
                          </div>
                        )}
</div>

<div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" htmlFor="form3Example1wPhone" style={{ color: "black" }}>Phone</label>
  <input
    type="tel"
    id="form3Example1wPhone"
    class="form-control"
    name="phone"
    value={user?.phone || ''}
    style={{ backgroundColor: "white", border: "1px solid black" ,padding:"13px"}}
    onChange={handleChange}
  />
   {errors.phone && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.phone}
                          </div>
                        )}
</div>
</div>
<div style={{display:'flex',justifyContent:"center",}}>
              {/* Category Selection */}
              <div className="form-outline mb-4">
                      <select
                        style={{ backgroundColor: "white", border: "1px solid black",width:"410px", padding: "15px", color: "black", borderRadius: ".3rem" }}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                      >
                        <option value="" disabled>Select Category</option>
                        {Cat.map((category) => (
                          <option style={{background:"black"}} key={category._id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.category}
                        </div>
                      )}
                    </div>
</div>


<div class="form-outline mb-4">

<select data-mdb-select-init style={{backgroundColor:"white",border:"1px solid black",width:"200px",padding:"13px",color:"black",borderRadius:".3rem"}} onChange={handleChange} name='gender'>
  <option value="1" style={{background:"black"}} >Gender</option>
  <option value="2" style={{background:"black"}}>Female</option>
  <option value="3" style={{background:"black"}}>Male</option>
  <option value="4" style={{background:"black"}}>Other</option>
</select>
{errors.gender && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.gender}
                          </div>
                        )}
</div>
<div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>

                    <div class="form-outline mb-4">
  <label class="form-label" htmlFor="exampleDatepicker1"  style={{ color: "black" }}>Date</label>
  <input
    type="text"
 class="form-control"
    id="exampleDatepicker1"
    name="date"
    style={{ backgroundColor: "white", border: "1px solid black",width:"200px",padding:"13px" }}
    onChange={handleChange}
  />
   {errors.date && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.date}
                          </div>
                        )}
</div>

<div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" htmlFor="form3Example1wCity" style={{ color: "black" }}>City</label>
  <input
    type="text"
    id="form3Example1wCity"
  class="form-control"
    name="city"
    style={{ backgroundColor: "white", padding:"13px",border: "1px solid black",width:"200px",marginRight:"320px" }}
    onChange={handleChange}
  />
   {errors.city && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.city}
                          </div>
                        )}
</div>
            </div>
            <div>
<div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" htmlFor="form3Example1wAddress" style={{ color: "black" }}>Address</label>
  <input
    type="text"
    id="form3Example1wAddress"
    class="form-control"
    name="address"
    style={{ backgroundColor: "white", border: "1px solid black",padding:"30px" }}
    onChange={handleChange}
  />
   {errors.address && (
                          <div style={{ color: "red", fontSize: "12px" }}>
                            {errors.address}
                          </div>
                        )}
</div>
</div>





             

            

              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-lg mb-1" onClick={handleSubmit}>Join</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
