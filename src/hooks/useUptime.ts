import { useEffect, useState } from 'react';

export type Uptime = { years: number; months: number; days: number; clock: string };

const pad = (n: number) => String(n).padStart(2, '0');

/** Diferença calendárica entre duas datas, sem aproximar mês por 30 dias. */
export const splitSpan = (from: Date, to: Date) => {
    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    return { years, months, days };
};

/** Uptime vivo: recalcula a cada segundo a partir do início do cargo. */
export const useUptime = (since: Date): Uptime => {
    const compute = (): Uptime => {
        const now = new Date();
        const { years, months, days } = splitSpan(since, now);
        const clock = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        return { years, months, days, clock };
    };

    const [value, setValue] = useState<Uptime>(compute);

    useEffect(() => {
        const id = window.setInterval(() => setValue(compute()), 1000);
        return () => window.clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [since]);

    return value;
};

/** Soma de períodos em meses — experiência acumulada, sem contar lacunas. */
export const accumulatedMonths = (tenures: { from: string; to: string | null }[]) =>
    tenures.reduce((total, { from, to }) => {
        const start = new Date(from);
        const end = to ? new Date(to) : new Date();
        const { years, months } = splitSpan(start, end);
        return total + years * 12 + months;
    }, 0);
