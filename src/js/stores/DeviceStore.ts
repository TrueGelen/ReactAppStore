import { action, makeObservable, observable, reaction } from "mobx"

export type TBreakpoints = {
	readonly vlg: number,
	readonly dlg: number,
	readonly lg: number,
	readonly md: number,
	readonly sm: number,
	readonly xs: number,
	readonly xxs: number
}

export const breakpoints: TBreakpoints = {
	vlg: 1921,
	dlg: 1920,
	lg: 1100,
	md: 960,
	sm: 780,
	xs: 560,
	xxs: 420
}

export class DeviceStore {
	private _innerWidth: number | null = null
	private _point: number | null = null

	constructor(innerWidth: number) {
		this._innerWidth = innerWidth
		makeObservable<this, "_innerWidth" | "_point" | "setInnerWidth" | "setPoint">(this, {
			_innerWidth: observable,
			_point: observable,
			setInnerWidth: action,
			setPoint: action
		})

		window.addEventListener("resize", this.setInnerWidth)

		reaction(() => this._innerWidth, value => )
	}

	get point() {
		return this._point
	}

	private setInnerWidth() {
		this._innerWidth = window.innerWidth
	}


	/* todo: settled on
	Доделать реализацию брекпонтов. Остановился на том, что буду делать 
	мобильный хедер и десктопный и для того, что бы понимать, что рендерить
	нужно знать ширину.
	 */
	private setPoint(innerWidth: number) {
		if (innerWidth <= breakpoints.xxs) {
			this._point = breakpoints.xxs
			return
		}

		if (innerWidth <= breakpoints.xs) {
			this._point = breakpoints.xs
			return
		}

		if (innerWidth <= breakpoints.sm) {
			this._point = breakpoints.sm
			return
		}

		if (innerWidth <= breakpoints.md) {
			this._point = breakpoints.md
			return
		}

		if (innerWidth <= breakpoints.lg) {
			this._point = breakpoints.lg
			return
		}

		if (innerWidth <= breakpoints.dlg) {
			this._point = breakpoints.dlg
			return
		}

		this._point = breakpoints.vlg

	}

}