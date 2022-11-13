const TasksManager = () => {
  return (
    <div className="tasks__manager-container container">
      <div className="tasks-container container">
        <div className="tasks"></div>
      </div>
      <div className="in__progress-container container">
        <div className="in__progress"></div>
      </div>
      <div className="completed-container container">
        <div className="completed"></div>
      </div>
    </div>
  );
};

export default TasksManager;
