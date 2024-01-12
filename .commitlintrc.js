// 这份文件打算使用 ES Module 来进行实现,勇敢🐮🐮不怕困难,下面的配置目前是复制官网的,没咋改,后期改吧~ flag 狂立
// 有点打算通过让开发者在 env 中设置 lang 来进行不同的提示,然后 env 嘛,会被忽略,每个人可能都不同,所以可以很便捷的切换提示语言 ( 反正 flag 立这了
/** @type {import('cz-git').UserConfig} */
// console.log(process.env.Lang)
export default {
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: {fd: 'docs: fix typos'},
        messages: {
            type: '选择提交的类型:',
            scope: 'Denote the SCOPE of this change (optional):',
            customScope: 'Denote the SCOPE of this change:',
            subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixesSelect: 'Select the ISSUES type of changeList by this change (optional):',
            customFooterPrefix: 'Input ISSUES prefix:',
            footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
            generatingByAI: 'Generating your AI commit subject...',
            generatedSelectByAI: 'Select suitable subject by AI generated:',
            confirmCommit: 'Are you sure you want to proceed with the commit above?'
        },
        types: [
            {value: 'feat', name: 'feat:     A new feature', emoji: ':sparkles:'},
            {value: 'fix', name: 'fix:      A bug fix', emoji: ':bug:'},
            {value: 'docs', name: 'docs:     Documentation only changes', emoji: ':memo:'},
            {value: 'style', name: 'style:    Changes that do not affect the meaning of the code', emoji: ':lipstick:'},
            {
                value: 'refactor',
                name: 'refactor: A code change that neither fixes a bug nor adds a feature',
                emoji: ':recycle:'
            },
            {value: 'perf', name: 'perf:     A code change that improves performance', emoji: ':zap:'},
            {
                value: 'test',
                name: 'test:     Adding missing tests or correcting existing tests',
                emoji: ':white_check_mark:'
            },
            {
                value: 'build',
                name: 'build:    Changes that affect the build system or external dependencies',
                emoji: ':package:'
            },
            {value: 'ci', name: 'ci:       Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:'},
            {value: 'chore', name: 'chore:    Other changes that don\'t modify src or test files', emoji: ':hammer:'},
            {value: 'revert', name: 'revert:   Reverts a previous commit', emoji: ':rewind:'}
        ],
        useEmoji: false,
        emojiAlign: 'center',
        useAI: false,
        aiNumber: 1,
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixes: [{value: 'closed', name: 'closed:   ISSUES has been processed'}],
        customIssuePrefixAlign: 'top',
        emptyIssuePrefixAlias: 'skip',
        customIssuePrefixAlias: 'custom',
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }
}