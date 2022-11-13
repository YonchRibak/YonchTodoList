const AddCollaborators = () => {
  return (
    <form className="form form__add-collaborator" action="">
      <input
        className="add-colaborator__name"
        type="text"
        name="colabname"
        placeholder="Name?"
        required
      />
      <input
        className="add-colaborator__email"
        type="email"
        name="email"
        placeholder="Email?"
        required
      />

      <button className="btn btn__collaborator-submit">
        Submit Collaborator
      </button>
    </form>
  );
};

export default AddCollaborators;
