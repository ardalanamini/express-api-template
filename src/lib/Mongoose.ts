import type { ClientSessionOptions } from "mongodb";
import { ClientSession, startSession } from "mongoose";

/**
 * MongoDB database transaction management class.
 */
export class DBTransaction {
  /**
   * Initialize a new Database Transaction.
   */
  public static async init(options?: ClientSessionOptions): Promise<DBTransaction> {
    const session = await startSession(options);

    return new this(session);
  }

  /**
   * Initialize a new Database Transaction.
   */
  private constructor(public readonly session: ClientSession) {
    session.startTransaction();
  }

  /**
   * Commit all the changes in transaction.
   */
  public async commit(endSession = true): Promise<void> {
    const { session } = this;

    await session.commitTransaction();

    if (endSession) await session.endSession();
  }

  /**
   * Abort all the changes in transaction.
   */
  public async abort(endSession = true): Promise<void> {
    const { session } = this;

    await session.abortTransaction();

    if (endSession) await session.endSession();
  }

  /**
   * Get mongoose options.
   */
  public mongoose(): { session: ClientSession } {
    return { session: this.session };
  }
}
