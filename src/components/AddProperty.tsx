import PropertyBasicsForm from '../components/PropertyBasicsForm';

export default function AddProperty() {
  const handleSubmit = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to API or move to next step
  };

  return (
    <div>
      <PropertyBasicsForm onSubmit={handleSubmit} />
    </div>
  );
}