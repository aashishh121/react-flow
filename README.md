# Interactive Graph Visualization with React Flow

This project is an interactive graph visualization application built with React.js, Redux, React Flow, TypeScript, and Tailwind CSS. Users can manipulate and customize graph elements, including node color and font size, with full undo/redo functionality.

# Setup Instructions

    git clone https://github.com/aashishh121/react-flow.git
    cd react-flow
    npm install
    npm run start

The application will be available at http://localhost:3000.

# Features

    1. Add Node – Easily add new nodes to the graph.
    2. Edit Node Name – Rename nodes dynamically.
    3. Change Node Color – Customize node colors for better visualization.
    4. Change Font Size – Adjust font size within the nodes.

# Undo & Redo Functionalities

    Color Changes – Revert or redo node color modifications.
    Font Size Adjustments – Undo or redo font size updates.
    Node Positioning – Restore previous positions of moved nodes.

# Dependencies

    1. react
    2. react-dom
    3. reactflow
    4. redux
    5. react-redux
    6. typescript
    7. tailwind css

# Folder structure

      src/
      │── App/
      |    │── AppLayout/
      |    │── GraphContainer/
      |    │   ├── ReactFlowComponent
      |    │   ├── NodeCustomizationPanel
      |    │   ├── UndoRedoControls
      |    │   ├── ColorPicker
      |    │   ├── FontSizeControl
      |    │── redux/
      |    │    ├── Graph/
      |    │    ├── History/
      |    |    ├── rootReducers.tsx
      |    |    ├── store.tsx
      |    │── Utils/
      │── App.tsx
      │── index.tsx

# Deployment

A deployed version of the application is available at: https://flow-react-task.netlify.app/
