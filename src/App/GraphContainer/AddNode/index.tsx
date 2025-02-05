interface AddNodeI {
  createNode: () => void;
}
function AddNode({ createNode }: AddNodeI) {
  return (
    <div>
      <button className="border p-1 rounded-lg" onClick={createNode}>
        Add Node
      </button>
    </div>
  );
}

export default AddNode;
