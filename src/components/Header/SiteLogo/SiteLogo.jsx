import './SiteLogo.css'

export default function SiteLogo() {
	return (
		<div className={'site-logo'}>
			<div className={'icon'}>
				<span>I</span>
			</div>
			Iliya&nbsp;<span style={{fontWeight: '400'}}>Baktash</span>
		</div>
	)
}