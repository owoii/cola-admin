import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
    clean: true,
    entries: ['src/index.js'],
    declaration: true,
    rollup: {
        emitCJS: true
    }
})
