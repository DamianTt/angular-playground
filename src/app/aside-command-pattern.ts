//https://refactoring.guru/design-patterns/command/typescript/example

/**
 * The Command interface declares a method for executing a command.
 */
export interface Command {
  execute(): void;
}

/**
 * Some commands can implement simple operations on their own.
 */
export class StartCommand implements Command {
  public execute(): void {
    console.log('CommandPattern: Im starting my job');
      }
}

export class FinishCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log('CommandPattern: Job finished');
    console.log(this.payload);
  }
}

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */
export class Invoker {
  private onStart: Command;

  private onFinish: Command;

  /**
   * Initialize commands.
   */
  public setOnStart(command: Command): void {
      this.onStart = command;
  }

  public setOnFinish(command: Command): void {
      this.onFinish = command;
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
   */
  public doSomethingImportant(): void {
      if (!this.isCommand(this.onStart) || !this.isCommand(this.onFinish)) {
        throw 'Command missing';
      }

      this.onStart.execute();
      setTimeout(() => this.working(this.onFinish), 2000);
  }

  working(finishCommand: Command) {
    console.log('CommandPattern: working');

    setTimeout(() => finishCommand.execute(), 3000);
  }

  private isCommand(object): boolean {
      return Boolean(object && object.execute !== undefined);
  }
}
