// All command objects should implement the same interface
interface ICommand {
  execute: () => void;
}

export default ICommand;
