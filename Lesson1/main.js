const element = React.createElement();
const LikeButton = function(){
    const [status, setStatus] = React.useState(false)
    return React.createElement('button', {onClick: function(){setStatus(!status)}}, `${status ? 'You liked' : 'Like from React'}`)

}
const dom = document .getElementById('root')
const root = ReactDOM.createRoot(dom)
root.render(React.createElement(LikeButton))
