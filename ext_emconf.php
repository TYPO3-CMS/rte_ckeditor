<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'TYPO3 CMS RTE CKEditor',
    'description' => 'Integration of CKEditor as a Rich Text Editor for the TYPO3 backend.',
    'category' => 'be',
    'state' => 'stable',
    'author' => 'TYPO3 Core Team',
    'author_email' => 'typo3cms@typo3.org',
    'version' => '13.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '13.0.0',
        ],
        'conflicts' => [],
        'suggests' => [
            'setup' => '13.0.0',
        ],
    ],
];
