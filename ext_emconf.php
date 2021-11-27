<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'TYPO3 CMS RTE CKeditor',
    'description' => 'Integration of CKEditor as Rich Text Editor for the TYPO3 backend.',
    'category' => 'be',
    'state' => 'stable',
    'clearCacheOnLoad' => 0,
    'author' => 'TYPO3 Core Team',
    'author_email' => 'typo3cms@typo3.org',
    'version' => '12.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '12.0.0',
        ],
        'conflicts' => [],
        'suggests' => [
            'setup' => '12.0.0',
        ],
    ],
];
