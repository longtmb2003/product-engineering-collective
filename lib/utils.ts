type ClassValue = string | false | null | undefined | ClassValue[];

/** Join class names, flattening nested arrays and dropping falsy values. */
export function cn(...classes: ClassValue[]): string {
  const out: string[] = [];

  for (const value of classes) {
    if (!value) continue;
    if (Array.isArray(value)) {
      const nested = cn(...value);
      if (nested) out.push(nested);
    } else {
      out.push(value);
    }
  }

  return out.join(" ");
}
