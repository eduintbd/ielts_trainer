export type Role = 'student' | 'admin' | 'moderator';

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: Role;
  image?: string | null;
  country?: string | null;
  nativeLang?: string | null;
  targetExam?: string | null;
};

export class UnauthorizedError extends Error {
  constructor(message = 'Authentication required') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Insufficient permissions') {
    super(message);
    this.name = 'ForbiddenError';
  }
}

export function requireUser(user: SessionUser | null | undefined): asserts user is SessionUser {
  if (!user) throw new UnauthorizedError();
}

export function requireRole(user: SessionUser | null | undefined, allowed: Role[]): asserts user is SessionUser {
  requireUser(user);
  if (!allowed.includes(user.role)) {
    throw new ForbiddenError(`Required role: ${allowed.join(' or ')}`);
  }
}

export function isAdmin(user: SessionUser | null | undefined): boolean {
  return user?.role === 'admin';
}

export function isModeratorOrAdmin(user: SessionUser | null | undefined): boolean {
  return user?.role === 'admin' || user?.role === 'moderator';
}
